import React from 'react';
import {Popover, OverlayTrigger, Button} from 'react-bootstrap';
const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover right</Popover.Title>
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
  );
const HoverD = () => (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={popover}
    >
      <Button variant="success">Hover me to see</Button>
    </OverlayTrigger>
  );
  
export default HoverD;