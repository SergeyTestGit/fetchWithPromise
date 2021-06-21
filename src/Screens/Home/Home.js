import { useState, useEffect, useMemo, useRef } from 'react'
import { uid } from 'uid'
import styles from './styles.module.sass'

const Home = ({ onSetTitles, onDeleteTitle }) => {
  const [data, setData] = useState([])
  const [editIndex, setEditIndex] = useState(null)
  const textareaRef = useRef(null)

  useEffect(() => {
    const fetchData = () => {
      fetch(
        'https://storage.googleapis.com/aller-structure-task/test_data.json'
      )
        .then((res) => res.json())
        .then((res) => {
          if (!res?.length) {
            alert('Unexpected error')
            return
          }
          const response = res[0]
          const result = []
          const titles = []

          if (!response?.length) {
            alert('No data')
            return
          }

          for (let i = 0; i < response.length; i++) {
            for (
              let columnId = 0;
              columnId < response[i].columns.length;
              columnId++
            ) {
              const title = response[i].columns[columnId].title
              result.push({
                imageUrl: response[i].columns[columnId].imageUrl,
                title: title,
                url: response[i].columns[columnId].url,
              })
              titles.push(title)
            }
          }

          onSetTitles(titles)
          setData(result)
        })
        .catch(() => alert('Unexpected error'))
    }
    fetchData()
  }, [])

  const handleDeleteArticle = (index) => {
    const result = window.confirm('Are you sure?')
    if (result) {
      const dataLocal = data
      dataLocal.splice(index, 1)
      setData([...dataLocal])
      onDeleteTitle(index)
    }
  }

  const handleEditIndex = (index) => {
    let result
    if (editIndex === index) {
      result = window.confirm('Confirm?')
      if (result) {
        const dataLocal = data
        dataLocal[index].title = textareaRef.current.value
        setData([...dataLocal])
        setEditIndex(null)
      }
    } else {
      setEditIndex(index)
    }
  }

  const handleClearValue = () => {
    setEditIndex(null)
  }

  const Table = () => {
    return useMemo(
      () =>
        data.map((el, index) => (
          <tr key={uid(32)}>
            <td className={styles.imageWrapper}>
              <img alt="-" src={el.imageUrl + '&height=150&width=150'} />
            </td>
            <td className={styles.titleWrapper}>
              <div className={styles.title}>
                {editIndex === index ? (
                  <textarea defaultValue={el.title} ref={textareaRef} />
                ) : (
                  el.title
                )}
              </div>
              <button
                className={styles.editWrapper}
                onClick={() => handleEditIndex(index)}
              >
                {editIndex === index ? (
                  <i className="material-icons">check</i>
                ) : (
                  <i className="material-icons">mode_edit</i>
                )}
              </button>
              {editIndex === index && (
                <button
                  className={styles.resetWrapper}
                  onClick={handleClearValue}
                >
                  <i className="material-icons">cancel</i>
                </button>
              )}
            </td>
            <td className={styles.followWrapper}>
              <a href={el.url} target="blank">
                Follow the link
              </a>
            </td>
            <td className={styles.deleteWrapper}>
              <button
                className={styles.delete}
                onClick={() => handleDeleteArticle(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        )),
      []
    )
  }

  if (!data.length) {
    return null
  }

  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>URL</th>
        </tr>
        <Table />
      </tbody>
    </table>
  )
}

export default Home
