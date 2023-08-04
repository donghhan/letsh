import { useContext, useState } from "react";
import styled from "styled-components";
import { ActiveStepContext } from "../../context/ActiveStepContext";
import Step from "./Step";

interface IStepNavigation {
  labels: string[];
}

export default function StepNavigation({
  labels,
}: IStepNavigation): JSX.Element {
  return (
    <div>
      {labels.map((item, index) => (
        <Step labels={item}></Step>
      ))}
    </div>
  );
}
