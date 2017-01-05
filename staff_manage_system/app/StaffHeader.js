import React, {
    Component
} from 'react';
import {
    findDOMNode
} from 'react-dom'; // 

class StaffHeader extends Component {
    //search
    handlerSearch() {
        let bar = findDOMNode(this.refs.searchBar);
        let value = bar.value;
        this.props.searchStaff(value);
    }

    render() {
        return (
            <div>
                <h3 style={{'textAlign':'center'}}>人员管理系统</h3>
                <table className="optHeader">
                    <tbody>
                        <tr>
                            <td className="headerTd">
                                <input type="text" ref='searchBar' onChange={this.handlerSearch.bind(this)} placeholder="Search..." />
                            </td>
                            <td className="headerTd">
                                <label htmlFor="idSelect">人员筛选</label>
                                <select name="idSelect" id="idSelect">
                                    <option value="0">主任</option>
                                    <option value="1">老师</option>
                                    <option value="2">学生</option>
                                    <option value="3">实习</option>
                                </select>
                            </td>
                            <td className="headerTd">
                                <label htmlFor="orderSelect">排列方式</label>
                                <select name="orderSelect" id="orderSelect">
                                    <option value="0">身份</option>
                                    <option value="1">年龄 升</option>
                                    <option value="2">年龄 降</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StaffHeader;