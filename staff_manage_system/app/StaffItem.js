import React, {
    Component
} from 'react';

class StaffItem extends Component {
    render() {
        return (
            <tr style={{'cursor': 'pointer'}}>
                <td className="itemTd">{this.props.item.info.name}</td>
                <td className="itemTd">{this.props.item.info.age}</td>
                <td className="itemTd">{this.props.item.info.id}</td>
                <td className="itemTd">{this.props.item.info.sex}</td>
                <td className="itemTd">
                    <a href="#" className="itemBtn">删除</a>
                    <a href="#" className="itemBtn">详情</a>
                </td>
            </tr>
        );
    }
}

export default StaffItem;