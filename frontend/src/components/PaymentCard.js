import React from "react";

function PaymentCard({ data }) {
	return (
		<div>
			<div className="cardBx p-5">
				<div className="row">
					<i class="fa fa-map-marker" aria-hidden="true"></i>
					<b>BOARDING POINT : </b>
					<p> {data.departure}</p>
				</div>
				<div className="row">
					<i class="fa fa-map-marker" aria-hidden="true"></i>
					<b>DESTINATION : </b>
					<p> {data.destination}</p>
				</div>
				<button
					className="continue"
					data-toggle="modal"
					data-target="#exampleModalCenter"
				>
					Continue
				</button>
			</div>
			<div
				class="modal fade"
				id="exampleModalCenter"
				tabindex="-1"
				role="dialog"
				aria-labelledby="exampleModalCenterTitle"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLongTitle">
								Modal title
							</h5>
							<button
								type="button"
								class="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								{/* <span aria-hidden="true">&times;</span> */}
							</button>
						</div>
						<div class="modal-body">
							<div>
								<form>
									<p>Full Name</p>
									<input type="text" className="form-control" />
									<p>Email</p>
									<input type="text" className="form-control" />
									<p>Phone</p>
									<input type="text" className="form-control" />
								</form>
							</div>
						</div>
						<div class="modal-footer">
							<button
								type="button"
								class="btn btn-secondary"
								data-dismiss="modal"
							>
								Close
							</button>
							<button type="button" class="btn btn-success">
								Next
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PaymentCard;
