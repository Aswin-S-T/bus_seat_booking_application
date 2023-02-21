import React, { useEffect, useState } from "react";
import PaymentCard from "../components/PaymentCard";
import SeatLayout from "../components/SeatLayout";
import "../style.scss";
import axios from "axios";
import { BACKEND_URL } from "../constants/applicationContants";
import LoadingBox from "../components/LoadingBox";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function HomeScreen() {
	const [showModal, setShowModal] = useState(false);
	const [buses, setBuses] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const res = await axios.get(`${BACKEND_URL}/api/v1/data/all-buses`);
				if (res && res.status == 200) {
					setLoading(false);
					console.log("res : ", res.data.data);
					setBuses(res.data.data);
				}
			} catch (error) {
				setError({
					message: "We are under maintainence, Sorry for the inconvinience",
				});
			}
		};
		fetchData();
	}, []);

	const handleModal = (e) => {
		setShowModal(!showModal);
	};
	return (
		<div>
			<section className="searchSection p-4 container-fluid">
				<div className="searchBar">
					<input
						type="text"
						placeholder="Search by place or name...."
						className="form-control w-25"
					/>
					<i className="fa fa-search"></i>
				</div>
			</section>
			<section className="mt-2">
				<div className="container-fluid">
					{loading ? (
						<LoadingBox />
					) : error ? (
						<div className="error-box">{error.message}</div>
					) : (
						buses.map((bus) => (
							<div class="collection mt-2">
								<div className="row p-2">
									<Accordion className="w-100">
										<AccordionSummary
											aria-controls="panel1a-content"
											id="panel1a-header"
										>
											<div class="col">
												<p>
													{bus.fromTime} → {bus.toTime}
												</p>
												<p>Duration: 0 days 03:50 hrs</p>
												<b>1945PLKNDD</b>
											</div>
											<div class="col">
												<p>{bus.departure} (Ladies Quota Available)</p>
												<b>SUPER FAST</b>
											</div>
											<div class="col">
												<p>Via : THRISSUR,MUVATTUPUZHA,KOTTAYAM,KOTTARAKKARA</p>
											</div>
											<div className="col">
												<p>{bus.totalSeat} Seats</p>
											</div>
											<div className="col">
												<b>₹ {bus.rate}</b>
												<br />
												<button>Book Seat</button>
											</div>
										</AccordionSummary>
										<AccordionDetails>
											<div className="details">
												<div className="container">
													<label>Choose Seat</label>
													<div className="row">
														<div className="col-md-6">
															<SeatLayout />
														</div>
														<div className="col-md-6">
															<PaymentCard data={bus} />
														</div>
													</div>
												</div>
											</div>
										</AccordionDetails>
									</Accordion>
								</div>
							</div>
						))
					)}
				</div>
			</section>
		</div>
	);
}

export default HomeScreen;
