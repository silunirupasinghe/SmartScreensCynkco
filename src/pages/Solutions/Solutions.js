import React, {useEffect} from 'react'
import SolutionSec2 from './SolutionSec2'
import SolutionSec1 from './SolutionSec1'

function Solutions() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  }, []);
  return (
    <>
    <SolutionSec1/>
    <SolutionSec2/>
    </>
  )
}

export default Solutions