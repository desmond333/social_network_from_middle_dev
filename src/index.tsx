import {render} from 'react-dom'
import './styles/index.scss'

type Theme = 'light' | 'dark'
const CURRENT_THEME: Theme = 'light'

const App = () => {
    return(<div className='app light'> fwfw</div>)
}

render(
    <div>
        <App/>
    </div>,
    document.getElementById('root')
)

