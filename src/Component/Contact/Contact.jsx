



export default function Contact() {
	return (
		<>
			<div className="mb-4 ">
				<div className="pt-3 container">
					<h2 className="text-center text-uppercase mb-3 fs-1 fw-bolder">contact section</h2>
					<div className="d-flex align-items-center justify-content-center mb-3">
						<div className={`line bg-dark mx-2`}></div>
						<i className="fa-solid fa-star"></i>
						<div className={`line bg-dark mx-2`}></div>
					</div>
					<form action="" className='w-50 p-3 mx-auto mt-5'>
						<label htmlFor="userName" className={`position-relative top-0`}>Name :</label>
						<input type="text" id='userName' placeholder='UserName' name='userName' className={` form-control border-0 border-bottom py-3 position-relative `} />
						<label htmlFor="userAge" className={`position-relative top-0`}>Age :</label>
						<input type="number" id='userAge' placeholder='userAge' name='userAge' className={` form-control border-0 border-bottom py-3 position-relative `} />
						<label htmlFor="userEmail" className={`position-relative top-0`}>Email :</label>
						<input type="email" id='userEmail' placeholder='userEmail' name='userEmail' className={` form-control border-0 border-bottom py-3 position-relative `} />
						<label htmlFor="userPassword" className={`position-relative top-0`}>Password :</label>
						<input type="text" id='userPassword' placeholder='userPassword' name='userPassword' className={` form-control border-0 border-bottom py-3 position-relative `} />
						<button className='btn mt-4 text-white' style={{backgroundColor:'#1abc9c'}}>Send Message</button>
					</form>
				</div>
			</div>
		</>
	);
	
}
