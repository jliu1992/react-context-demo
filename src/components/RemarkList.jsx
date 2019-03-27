import React, { Component } from "react";
import { List, Skeleton } from "antd";

class RemarkList extends Component {
  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={this.props.remarks}
        renderItem={item => (
          <List.Item
            actions={[<a onClick={() => this.props.delete(item)}>delete</a>]}
          >
            <Skeleton title={false} loading={false} active>
              <div>{item}</div>
            </Skeleton>
          </List.Item>
        )}
      />
    );
  }
}

export default RemarkList;
