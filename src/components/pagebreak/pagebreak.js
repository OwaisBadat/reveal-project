import React, {Component} from "react"


class PageBreak extends React.Component {


    componentDidMount() {

      }
    
    render() {
        const blackStyle ={
            color: "black"
          }
        const whiteStyle ={
            color: "white",
          }
        const spacingStyle ={
            marginTop: "10px",
            marginBottom: "10px",
          }
          const seeWorld ={
            marginTop: "15px",
            marginBottom: "20px",
            fontSize: "40px",
          }
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