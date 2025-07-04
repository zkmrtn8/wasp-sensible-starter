import {Link} from 'react-router-dom';
export default function NotFoundPage(){
    return <div className={'m-auto p-14 flex flex-col items-center gap-6'}>
        <h1 className={'mx-auto text-center text-8xl font-extrabold'}>404</h1>
        <h3 className={'mx-auto text-center text-2xl font-medium'}>Page not found!</h3>
        <Link to={'/'}>Home »</Link>
    </div>
}