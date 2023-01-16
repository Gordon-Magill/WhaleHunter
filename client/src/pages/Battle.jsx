import React from "react";
import { Form, Input, Button, Alert, Row, Col } from "antd";
import { battle } from "../components/battle"
// import user's ship as attacker
// import random monster as defender

export default function Battle() {
  return (
    <div className="battle">
      <h1>FIGHT!!!</h1>
      <Col>
        <Button
          type="primary"
          // battle(attacker, defender)
          onClick={() => battle()}
          >Start battle
        </Button>

        <Button
          type="primary"
          >Next Round
        </Button>

        <Button
          type="primary"
          >Retreat!
        </Button>
      </Col>
    </div>
  );
}
