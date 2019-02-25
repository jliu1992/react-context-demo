import React, { Component } from 'react';
import {
  List, Skeleton,
} from 'antd';

import RemarkContext from '../context/remark';

class RemarkList extends Component {
  render() {
    return (
      <RemarkContext.Consumer>
        {(context) => (
          <List
            itemLayout="horizontal"
            dataSource={context.remarks}
            renderItem={item => (
              <List.Item actions={[<a onClick={() => context.delete(item)}>delete</a>]}>
                <Skeleton title={false} loading={false} active>
                  <div>{item}</div>
                </Skeleton>
              </List.Item>
            )}
          />
        )}
      </RemarkContext.Consumer>
    );
  }
}

export default RemarkList;