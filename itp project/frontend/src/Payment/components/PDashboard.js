import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (

        <body>
            <section id="content">
                <main>

                    <div className="menu">
                        <div className="left">
                            <h1>PAYMENT DASHBOARD</h1>
                        </div>
                    </div>

                    <div className="table-data">

                        <div className="tbutton">
                            <Link to={'/ManagePayments'}>
                                <div className="head">
                                    <h3>Manage Payment Records</h3>
                                    <i class='bx bxs-customize'></i>
                                </div>
                            </Link>
                        </div>
                        <div className="tbutton">
                            <Link to={'/AddPayment'}>
                                <div className="head">
                                    <h3>Add Payment Record</h3>
                                    <i class='bx bxs-alarm-add'></i>
                                </div>
                            </Link>

                        </div>

                        <div className="tbutton">
                            <Link to={'/PReportGenarate'}>
                                <div className="head">
                                    <h3>View Payment Report</h3>
                                    <i class='bx bxs-report'></i>
                                </div>
                            </Link>
                        </div>

                        <div className="tbutton">
                            <Link to={'/ManagePayments'}>
                                <div className="head">
                                    <h3>Manage All the Payment Details</h3>
                                    <i class='bx bxs-cart-alt'></i>
                                </div>
                            </Link>
                        </div>
                    </div>
                </main>
            </section>
        </body>




    )

}


