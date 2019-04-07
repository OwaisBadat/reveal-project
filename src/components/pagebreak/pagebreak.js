import React from "react"


class PageBreak extends React.Component {


    componentDidMount() {

      }
    
    render() {
        const greyLine ={
          width: "100%",
          height: "10px",
          backgroundColor: "#0D0D0B",
        }
        return (
            <div>
              <div style={greyLine}>
              </div>
            </div>

        )
    }
}


export default PageBreak;