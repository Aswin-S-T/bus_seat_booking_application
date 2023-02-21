import React, { useState } from "react";
import "./style.scss";

function App() {
	const [showModal, setShowModal] = useState(false);
	const handleModal = (e) => {
		setShowModal(!showModal);
	};
	return (
		<div>
			<header className="p-2">
				<div>
					<h2>
						Ur<span className="span">Bus</span>
					</h2>
				</div>
			</header>
			<main>
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
						<div class="collection mt-2">
							<div className="row p-2">
								<div class="col">
									<p>00:55 → 04:45</p>
									<p>Duration: 0 days 03:50 hrs</p>
									<b>1945PLKNDD</b>
								</div>
								<div class="col">
									<p>KOTTAYAM (Ladies Quota Available)</p>
									<b>SUPER FAST</b>
								</div>
								<div class="col">
									<p>Via : THRISSUR,MUVATTUPUZHA,KOTTAYAM,KOTTARAKKARA</p>
								</div>
								<div className="col">
									<p>45 Seats</p>
								</div>
								<div className="col">
									<b>₹ 187</b>
									<br />
									<button onClick={() => handleModal()}>Book Seat</button>
								</div>
							</div>
							{showModal && (
								<div className="details">
									<div className="container">
										<label>Choose Seat</label>
										<div className="row">
											<div className="col-md-6">
												<div className="row">
													<div className="col-md-6">
														<div class="bus seat2-2 border-0 p-0">
															<div class="seat-row-1">
																<ol class="seats">
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-1"
																			value="1"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-1">1 </label>
																	</li>
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-2"
																			value="2"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-2">2 </label>
																	</li>
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-3"
																			value="3"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-3">3 </label>
																	</li>
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-4"
																			value="4"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-4">4 </label>
																	</li>
																</ol>
															</div>
															<div class="seat-row-2">
																<ol class="seats">
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-5"
																			value="5"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-5">5 </label>
																	</li>
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-6"
																			value="6"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-6">6 </label>
																	</li>
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-7"
																			value="7"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-7">7 </label>
																	</li>
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-8"
																			value="8"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-8">8 </label>
																	</li>
																</ol>
															</div>
															<div class="seat-row-3">
																<ol class="seats">
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-9"
																			value="9"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-9">9 </label>
																	</li>
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-10"
																			value="10"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-10">10 </label>
																	</li>
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-11"
																			value="11"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-11">11 </label>
																	</li>
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-12"
																			value="12"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-12">12 </label>
																	</li>
																</ol>
															</div>
															<div class="seat-row-4">
																<ol class="seats">
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-13"
																			value="13"
																			required=""
																			type="radio"
																			disabled
																		/>
																		<label htmlFor="seat-radio-1-13">13 </label>
																	</li>
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-14"
																			value="14"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-14">14 </label>
																	</li>
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-15"
																			value="15"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-15">15 </label>
																	</li>
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-16"
																			value="16"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-16">16 </label>
																	</li>
																</ol>
															</div>
															<div class="seat-row-5">
																<ol class="seats">
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-17"
																			value="17"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-17">17 </label>
																	</li>
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-18"
																			value="18"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-18">18 </label>
																	</li>
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-19"
																			value="19"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-19">19 </label>
																	</li>
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-20"
																			value="20"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-20">20 </label>
																	</li>
																</ol>
															</div>
															<div class="seat-row-6">
																<ol class="seats">
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-21"
																			value="21"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-21">21 </label>
																	</li>
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-22"
																			value="22"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-22">22 </label>
																	</li>
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-23"
																			value="23"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-23">23 </label>
																	</li>
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-24"
																			value="24"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-24">24 </label>
																	</li>
																</ol>
															</div>
															<div class="seat-row-7">
																<ol class="seats">
																	<li class="seat">
																		<label
																			htmlFor="seat-radio-1-BLANK"
																			style={{ background: "none" }}
																		></label>
																	</li>
																	<li class="seat">
																		<label
																			htmlFor="seat-radio-1-BLANK"
																			style={{ background: "none" }}
																		></label>
																	</li>
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-25"
																			value="25"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-25">25 </label>
																	</li>
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-26"
																			value="26"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-26">26 </label>
																	</li>
																</ol>
															</div>
															<div class="seat-row-8">
																<ol class="seats">
																	<li class="seat">
																		<label
																			htmlFor="seat-radio-1-BLANK"
																			style={{ background: "none" }}
																		></label>
																	</li>
																	<li class="seat">
																		<label
																			htmlFor="seat-radio-1-BLANK"
																			style={{ background: "none" }}
																		></label>
																	</li>
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-27"
																			value="27"
																			required=""
																			type="radio"
																		/>
																		<label htmlFor="seat-radio-1-27">27 </label>
																	</li>
																	<li class="seat">
																		<input
																			role="input-passenger-seat"
																			name="passengers[1][seat]"
																			id="seat-radio-1-28"
																			value="28"
																			required=""
																			type="radio"
																			disabled
																		/>
																		<label htmlFor="seat-radio-1-28">28 </label>
																	</li>
																</ol>
															</div>
														</div>
													</div>
													<div className="col-md-6">
														<div
															class="text-left mt-2"
															style={{ display: "inline-block" }}
														>
															<button class="btn btn-primary mb-2">
																Available
															</button>
															<button class="btn btn-success mb-2">
																Choosen
															</button>
															<button class="btn btn-danger mb-2">
																Booked
															</button>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-6">
												<div className="cardBx p-5">
													<div className="row">
														<i class="fa fa-map-marker" aria-hidden="true"></i>
														<b>BOARDING POINT : </b>
														<p> KOTTAYAM</p>
													</div>
													<div className="row">
														<i class="fa fa-map-marker" aria-hidden="true"></i>
														<b>DESTINATION : </b>
														<p> BANGLORE</p>
													</div>
													<button className="continue">Continue</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
						<div class="row p-2 collection mt-2">
							<div class="col">
								<p>00:55 → 04:45</p>
								<p>Duration: 0 days 03:50 hrs</p>
								<b>1945PLKNDD</b>
							</div>
							<div class="col">
								<p>KOTTAYAM (Ladies Quota Available)</p>
								<b>SUPER FAST</b>
							</div>
							<div class="col">
								<p>Via : THRISSUR,MUVATTUPUZHA,KOTTAYAM,KOTTARAKKARA</p>
							</div>
							<div className="col">
								<p>45 Seats</p>
							</div>
							<div className="col">
								<b>₹ 187</b>
								<br />
								<button>Book Seat</button>
							</div>
						</div>
						<div class="row p-2 collection mt-2">
							<div class="col">
								<p>00:55 → 04:45</p>
								<p>Duration: 0 days 03:50 hrs</p>
								<b>1945PLKNDD</b>
							</div>
							<div class="col">
								<p>KOTTAYAM (Ladies Quota Available)</p>
								<b>SUPER FAST</b>
							</div>
							<div class="col">
								<p>Via : THRISSUR,MUVATTUPUZHA,KOTTAYAM,KOTTARAKKARA</p>
							</div>
							<div className="col">
								<p>45 Seats</p>
							</div>
							<div className="col">
								<b>₹ 187</b>
								<br />
								<button>Book Seat</button>
							</div>
						</div>
						<div class="row p-2 collection mt-2">
							<div class="col">
								<p>00:55 → 04:45</p>
								<p>Duration: 0 days 03:50 hrs</p>
								<b>1945PLKNDD</b>
							</div>
							<div class="col">
								<p>KOTTAYAM (Ladies Quota Available)</p>
								<b>SUPER FAST</b>
							</div>
							<div class="col">
								<p>Via : THRISSUR,MUVATTUPUZHA,KOTTAYAM,KOTTARAKKARA</p>
							</div>
							<div className="col">
								<p>45 Seats</p>
							</div>
							<div className="col">
								<b>₹ 187</b>
								<br />
								<button>Book Seat</button>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
