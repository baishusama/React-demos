import React from 'react';
import {
    render
} from 'react-dom';

import StaffHeader from './StaffHeader.js';
import StaffItemPanel from './StaffItemPanel.js';
import StaffFooter from './StaffFooter.js';
import StaffDetail from './StaffDetail.js';

import Staff from './STAFF.js';

/*
var rawData = [{
    info: {
        descrip: '我是一匹来自远方的狼。',
        sex: '男',
        age: 20,
        name: '张三',
        id: '主任'
    },
    key: "0001"
}, {
    info: {
        descrip: '我是一匹来自远方的狼。',
        sex: '女',
        age: 21,
        name: '赵静',
        id: '学生'
    },
    key: "0002"
}, {
    info: {
        descrip: '我是一匹来自远方的狼。',
        sex: '女',
        age: 22,
        name: '王二麻',
        id: '学生'
    },
    key: "0003"
}, {
    info: {
        descrip: '我是一匹来自远方的狼。',
        sex: '女',
        age: 24,
        name: '李晓婷',
        id: '实习'
    },
    key: "0004"
}, {
    info: {
        descrip: '我是一匹来自远方的狼。',
        sex: '男',
        age: 23,
        name: '张春田',
        id: '实习'
    },
    key: "0005"
}, {
    info: {
        descrip: '我是一匹来自远方的狼。',
        sex: '男',
        age: 22,
        name: '刘建国',
        id: '学生'
    },
    key: "0006"
}, {
    info: {
        descrip: '我是一匹来自远方的狼。',
        sex: '男',
        age: 24,
        name: '张八',
        id: '主任'
    },
    key: "0007"
}, {
    info: {
        descrip: '我是一匹来自远方的狗。',
        sex: '男',
        age: 35,
        name: '李四',
        id: '老师'
    },
    key: "0008"
}, {
    info: {
        descrip: '我是一匹来自远方的猪。',
        sex: '男',
        age: 42,
        name: '王五',
        id: '学生'
    },
    key: "0009"
}, {
    info: {
        descrip: '我是一匹来自远方的牛。',
        sex: '男',
        age: 50,
        name: '赵六',
        id: '实习'
    },
    key: "0010"
}, {
    info: {
        descrip: '我是一匹来自远方的马。',
        sex: '男',
        age: 60,
        name: '孙七',
        id: '实习'
    },
    key: "0011"
}];
*/

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            staff: new Staff,
            staffDetail: null
        };
    }

    //增
    addStaffItem(item) {
        this.setState({
            staff: this.state.staff.addStaffItem(item)
        });
    }

    /*
     * 搜索
     */
    searchStaff(word) {
        this.setState({
            staff: this.state.staff.searchStaff(word)
        });
    }

    render() {
        return (
            <div>
                <StaffHeader searchStaff={this.searchStaff.bind(this)} />
                <StaffItemPanel items={this.state.staff.staff} />
                <StaffFooter addStaffItem={this.addStaffItem.bind(this)}/>
                <StaffDetail/>
            </div>
        );
    }
}

//React.render(<App />, document.getElementById('app'));
render(<App />, document.getElementById('app'));