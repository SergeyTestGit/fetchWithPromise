import { uid } from 'uid'

const Titles = ({ titles, isLoaded }) => {
  if (!isLoaded) {
    window.location.href = '/'
  }

  if (!titles.length) {
    return null
  }

  return (
    <table>
      <tbody>
        <tr>
          <th>Title</th>
        </tr>
        {titles.map((el) => (
          <tr key={uid(32)}>
            <div>
              <span>{el}</span>
            </div>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Titles
