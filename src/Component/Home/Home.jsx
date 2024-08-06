
import style from './Home.module.css'
import img from '../../assets/avataaars.svg'

export default function Home() {
    return <>
		<div className={`${style.bg2ndColor} text-center text-white py-16`}>
			<div className='d-flex justify-content-center align-items-center'>
				<img src={img} alt="" className='mb-3'/>
			</div>
				<h2 className="text-uppercase mb-3 fs-1 fw-bolder">start Framework</h2>
				<div className="d-flex align-items-center justify-content-center mb-3">
					<div className={`line mx-2`}></div>
					<i className="fa-solid fa-star"></i>
					<div className={`line mx-2`}></div>
				</div>
				<div>Graphic Artist - Web Designer - Illustrator</div>
		</div>
				
</>
		
}
