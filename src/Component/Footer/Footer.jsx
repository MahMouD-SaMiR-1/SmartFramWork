

export default function Footer() {
    return (
			<>
				<div
					className={`footer d-flex align-items-center justify-content-center  `}
				>
					<div className={`card-group`}>
						<div className={`card`}>
							<div className="card-body text-center">
								<h3 className="fw-bolder mb-2">LOCATION</h3>
								<p>2215 John Daniel Drive</p>
								<p>Clark, MO 65243</p>
							</div>
						</div>
						<div className={`card`}>
							<div className="card-body text-center">
								<h3 className="fw-bolder mb-2">AROUND THE WEB</h3>
								<div className="icons">
									<i className={`fa-brands fa-facebook mx-1 icon `}></i>
									<i className={`fa-brands fa-twitter mx-1 icon`}></i>
									<i className={`fa-brands fa-linkedin mx-1 icon`}></i>
									<i className={`fa-solid fa-globe mx-1 icon`}></i>
								</div>
							</div>
						</div>
						<div className={`card`}>
							<div className="card-body text-center">
								<h3 className="fw-bolder mb-2">ABOUT FREELANCER</h3>
								<p>
									Freelance is a free to use, licensed Bootstrap theme created
									by Mahmoud Samir
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className={`p`}>
					<p>Copyright © Your Website 2024</p>
				</div>
			</>
		);
}
