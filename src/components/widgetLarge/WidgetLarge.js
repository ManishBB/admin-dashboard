import "./widgetlarge.css"

const WidgetLarge = () => {

    const Button = ({type}) =>{
        return <button className={"widgetLargeButton " +type } >{type}</button>
    }
    return (
        <div className="widgetLarge">
            <h3 className="widgetLargeTitle">Latest Transactions</h3>
            <table className="widgetLargeTable">
                <tr className="widgetLargeTr">
                    <th className="widgetLargeTh">Customer</th>
                    <th className="widgetLargeTh">Date</th>
                    <th className="widgetLargeTh">Amount</th>
                    <th className="widgetLargeTh">Status</th>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetLargeImage"/>
                        <span className="widgetLargeName">Susane Carol</span>
                    </td>
                    <td className="widgetLargeDate">2 Jun 2021</td>
                    <td className="widgetLargeAmount">$123.45</td>
                    <td className="widgetLargeStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetLargeImage"/>
                        <span className="widgetLargeName">Susane Carol</span>
                    </td>
                    <td className="widgetLargeDate">2 Jun 2021</td>
                    <td className="widgetLargeAmount">$123.45</td>
                    <td className="widgetLargeStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetLargeImage"/>
                        <span className="widgetLargeName">Susane Carol</span>
                    </td>
                    <td className="widgetLargeDate">2 Jun 2021</td>
                    <td className="widgetLargeAmount">$123.45</td>
                    <td className="widgetLargeStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetLargeImage"/>
                        <span className="widgetLargeName">Susane Carol</span>
                    </td>
                    <td className="widgetLargeDate">2 Jun 2021</td>
                    <td className="widgetLargeAmount">$123.45</td>
                    <td className="widgetLargeStatus">
                        <Button type="Declined" />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLarge
