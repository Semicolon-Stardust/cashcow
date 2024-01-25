import React, { useState, useEffect } from "react";

const Budgeting = () => {
	return (
		<div className="min-h-screen mx-[5rem] pt-[7rem]">
			<div className="flex flex-col justify-center">
				<h2 className="text-2xl font-bold mb-4">Budgeting:</h2>

				<div className="mb-4">
					<h3 className="text-lg font-semibold mb-2">Definition:</h3>
					<p className="text-sm">
						Budgeting is a financial planning process that involves creating a
						detailed plan of expected income and expenses for a specific period.
						It serves as a roadmap to allocate resources efficiently, prioritize
						spending, and achieve financial goals.
					</p>
				</div>

				<div className="mb-4">
					<h3 className="text-lg font-semibold mb-2">Advantages:</h3>
					<ul className="list-disc list-inside text-sm">
						<li>
							Financial Control: Budgeting provides a clear overview of income
							and expenses, allowing individuals to take control of their
							finances.
						</li>
						<li>
							Goal Achievement: It helps in setting and achieving financial
							goals, whether short-term (e.g., vacation) or long-term (e.g.,
							buying a home).
						</li>
						<li>
							Emergency Preparedness: A budget includes provisions for savings,
							contributing to the creation of an emergency fund for unexpected
							expenses.
						</li>
						<li>
							Debt Management: By tracking expenses, individuals can identify
							areas to reduce spending and allocate more funds to paying off
							debts.
						</li>
						<li>
							Improved Decision-Making: Budgets enable informed financial
							decisions, helping individuals make choices aligned with their
							priorities and financial objectives.
						</li>
						<li>
							Financial Awareness: It fosters awareness of spending patterns,
							leading to better money management habits and increased financial
							literacy.
						</li>
					</ul>
				</div>

				<div>
					<h3 className="text-lg font-semibold mb-2">Procedure:</h3>
					<ol className="list-decimal list-inside text-sm">
						<li>
							Identify Income Sources: List all sources of income, including
							salary, freelance work, investments, and other earnings.
						</li>
						<li>
							List Fixed Expenses: Identify and list regular fixed expenses,
							such as rent/mortgage, utilities, insurance, and loan payments.
						</li>
						<li>
							Account for Variable Expenses: Categorize and estimate variable
							expenses like groceries, entertainment, dining out, and
							discretionary spending.
						</li>
						<li>
							Set Financial Goals: Establish short-term and long-term financial
							goals, such as saving for a vacation, an emergency fund, or
							retirement.
						</li>
						<li>
							Allocate Funds: Allocate specific amounts to each spending
							category based on priorities and financial goals.
						</li>
						<li>
							Create a Savings Plan: Designate a portion of income to savings,
							including emergency funds, short-term savings, and long-term
							investments.
						</li>
						<li>
							Review and Adjust: Regularly review the budget to track actual
							spending against the plan. Adjust the budget as needed,
							considering changes in income, expenses, or financial goals.
						</li>
						<li>
							Use Budgeting Tools: Utilize budgeting tools or apps to streamline
							the process and gain insights into spending patterns.
						</li>
						<li>
							Prioritize Debt Repayment: If applicable, allocate funds for
							repaying high-interest debts, focusing on becoming debt-free.
						</li>
						<li>
							Monitor and Reflect: Monitor financial progress regularly and
							reflect on achievements and challenges. Make adjustments to the
							budget based on changing circumstances or financial priorities.
						</li>
					</ol>
				</div>
			</div>
		</div>
	);
};

export default Budgeting;
