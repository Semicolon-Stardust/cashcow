import React, { useEffect, useState } from "react";
import LoggedInNavbar from '../Navbar/LoggedInNavbar';
import { tenureData } from "./utils/constants";
import { numberWithCommas } from "./utils/config";
import TextInput from "./components/text-input";
import SliderInput from "./components/slider-input";


export function EMI() {
	const [cost, setCost] = useState(0);
	const [interest, setInterest] = useState(10);
	const [fee, setFee] = useState(1);
	const [downPayment, setDownPayment] = useState(0);
	const [tenure, setTenure] = useState(12);
	const [emi, setEmi] = useState(0);

	const submitHandler = (e) => {
		e.preventDefault();

		console.log(cost)
	}

	const calculateEMI = (downpayment) => {
		// EMI amount = [P x R x (1+R)^N]/[(1+R)^N-1]
		if (!cost) return;

		const loanAmt = cost - downpayment;
		const rateOfInterest = interest / 100;
		const numOfYears = tenure / 12;

		const EMI =
			(loanAmt * rateOfInterest * (1 + rateOfInterest) ** numOfYears) /
			((1 + rateOfInterest) ** numOfYears - 1);

		return Number(EMI / 12).toFixed(0);
	};

	const calculateDP = (emi) => {
		if (!cost) return;

		const downPaymentPercent = 100 - (emi / calculateEMI(0)) * 100;
		return Number((downPaymentPercent / 100) * cost).toFixed(0);
	};

	useEffect(() => {
		if (!(cost > 0)) {
			setDownPayment(0);
			setEmi(0);
		}

		const emi = calculateEMI(downPayment);
		setEmi(emi);
	}, [tenure, cost]);

	const updateEMI = (e) => {
		if (!cost) return;

		const dp = Number(e.target.value);
		setDownPayment(dp.toFixed(0));

		const emi = calculateEMI(dp);
		setEmi(emi);
	};
	const updateDownPayment = (e) => {
		if (!cost) return;

		const emi = Number(e.target.value);
		setEmi(emi.toFixed(0));

		const dp = calculateDP(emi);
		setDownPayment(dp);
	};

	const totalDownPayment = () => {
		return numberWithCommas(
			(Number(downPayment) + (cost - downPayment) * (fee / 100)).toFixed(0)
		);
	};

	const totalEMI = () => {
		return numberWithCommas((emi * tenure).toFixed(0));
	};

	// return (
	// 	<div>
	// 		<LoggedInNavbar />
	// 		<div className="flex justify-center items-center min-h-screen sm:flex-row flex-col">
	// 			<form onSubmit={submitHandler} class="flex flex-col rounded-lg shadow-sm">
	// 				<span className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400">Total Cost of Asset</span>
	// 				<input value={cost} onChange={(e) => {setCost(e.target.value)}} type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
	// 				<span className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400">Interest Rate in %</span>
	// 				<input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
	// 				<span className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400">Down Payment</span>
	// 				<input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
	// 				<span className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400">Total Loan Amount</span>
	// 				<input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
	// 				<span className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400">Tenure</span>
	// 				<input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
	// 				<button>Submit</button>
	// 			</form>
	// 		</div>
	// 	</div>
	// )

	return (
		<div className="flex flex-col justify-center items-center">
			<LoggedInNavbar />
			<div className="flex flex-col">
				<span className="title" style={{ fontSize: 30, marginTop: 10 }}>
					EMI Calculator
				</span>

				<TextInput
					title={"Total Cost of Asset"}
					state={cost}
					setState={setCost}
				/>

				<TextInput
					title={"Interest Rate (in %)"}
					state={interest}
					setState={setInterest}
				/>

				<TextInput
					title={"Processing Fee (in %)"}
					state={fee}
					setState={setFee}
				/>

				<SliderInput
					title="Down Payment"
					underlineTitle={`Total Down Payment - ${totalDownPayment()}`}
					onChange={updateEMI}
					state={downPayment}
					min={0}
					max={cost}
					labelMin={"0%"}
					labelMax={"100%"}
				/>

				<SliderInput
					title="Loan per Month"
					underlineTitle={`Total Loan Amount - ${totalEMI()}`}
					onChange={updateDownPayment}
					state={emi}
					min={calculateEMI(cost)}
					max={calculateEMI(0)}
				/>

				<span className="title">Tenure</span>
				<div className="tenureContainer">
					{tenureData.map((t) => {
						return (
							<button
								className={`tenure ${t === tenure ? "selected" : ""}`}
								onClick={() => setTenure(t)}>
								{t}
							</button>
						);
					})}
				</div>
			</div>
		</div>
)
}

export default EMI