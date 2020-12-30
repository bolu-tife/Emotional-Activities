// post-layout.js

  import React from 'react';
import { Link} from "gatsby"
  import { SvgBubbleSlider } from 'react-svg-bubble-slider'

  const ICONS_TO_USE = ["angry", "sad", "neutral", "smile", "happy", "cool"]

  const EmoLayout = () => {


    return (
      <div aria-label="Emotion slider" >


<SvgBubbleSlider icons={ICONS_TO_USE} iconSet="twemoji" aria-label="Emotion slider" role="slider" primaryColor="#4fc3f7">
          {({ reaction }) =>  (

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "24px 0px",

              }}
            >
              <Link 
              to={`/` + reaction}>
              <button className="whitebutton" aria-label=" button">
                {reaction ? reaction : "?"}
              </button>
              </Link>
            </div>
          )}
        </SvgBubbleSlider >
      </div>
    )
  }

  export default EmoLayout