import React from 'react'
import { Card } from 'antd';

function AbtCard(props) {
  const { Meta } = Card;
  return (
    <div>
      <Card
        hoverable
        style={{ width: 270, textAlign: "center" }}
        cover={<img alt="example" src={props.holderImage} style={{ height: "250px", width: "270px", objectFit: "cover" }} />}
      >
        <Meta title={props.holderName} description={props.holderPost} />
      </Card>,
    </div>
  )
}

export default AbtCard
