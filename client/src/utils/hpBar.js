import { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
  AnimatePresence
} from "framer-motion";
import styled from 'styled-components';
import { Span } from "./Span";


const ProgressContainer = styled(motion.div)`
    position: fixed;
    top: 20px;
    left: 20px;
    width: 120px;
    height: 120px;
`;

export const ScrollAnimation = () => {
  const [currentPrecent, setCurrentPercent] = useState(null)
    return (
        <ProgressContainer>

        </ProgressContainer>
    )
}
