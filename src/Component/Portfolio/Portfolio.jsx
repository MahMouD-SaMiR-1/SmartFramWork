
import img from '../../assets/poert1.png'
export default function Portfolio() {
    return (
			<>
				<div className="mb-4">
					<div className="pt-3 container">
						<h2 className="text-center text-uppercase mb-3 fs-1 fw-bolder">portfolio component</h2>
						<div className="d-flex align-items-center justify-content-center mb-3">
							<div className={`line bg-dark mx-2`}></div>
							<i className="fa-solid fa-star"></i>
							<div className={`line bg-dark mx-2`}></div>
						</div>
					</div>
				<div className='container'>
					<div className="row gy-5">
						<div className="col-lg-4 col-md-6">
							<div className='rounded-3 overflow-hidden position-relative'>
								<img src={img} alt="" className='w-100 rounded-3' />
								<div className={`layer position-absolute stat-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
									<i className='text-white fa-solid fa-plus fa-6x'></i>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className='rounded-3 overflow-hidden position-relative'>
								<img src={img} alt="" className='w-100 rounded-3' />
								<div className={`layer position-absolute stat-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
									<i className='text-white fa-solid fa-plus fa-6x'></i>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className='rounded-3 overflow-hidden position-relative'>
								<img src={img} alt="" className='w-100 rounded-3' />
								<div className={`layer position-absolute stat-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
									<i className='text-white fa-solid fa-plus fa-6x'></i>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className='rounded-3 overflow-hidden position-relative'>
								<img src={img} alt="" className='w-100 rounded-3' />
								<div className={`layer position-absolute stat-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
									<i className='text-white fa-solid fa-plus fa-6x'></i>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className='rounded-3 overflow-hidden position-relative'>
								<img src={img} alt="" className='w-100 rounded-3' />
								<div className={`layer position-absolute stat-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
									<i className='text-white fa-solid fa-plus fa-6x'></i>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className='rounded-3 overflow-hidden position-relative'>
								<img src={img} alt="" className='w-100 rounded-3' />
								<div className={`layer position-absolute stat-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
									<i className='text-white fa-solid fa-plus fa-6x'></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
			</>
		);
	
}
