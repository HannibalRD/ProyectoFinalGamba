import { Link } from 'react-router-dom'
import { tiposComida } from '../../utils/tiposComidas';


export default function TiposComida() {

    return (
        <section className='px-2 flex gap-4 overflow-x-scroll whitespace-nowrap scrollbar-hide'>
            {
                tiposComida.map(comida => {
                    return (
                        <Link key={comida} className='w-16 flex flex-col items-center justify-center'>
                            <img className='min-w-16' src={`./iconosComida/${comida}.svg`} />
                            <span className="no-underline whitespace-pre-wrap text-xs p-0 leading-4 font-medium">
                                {comida}
                            </span>
                        </Link>
                    )
                })
            }
        </section>
    )
}