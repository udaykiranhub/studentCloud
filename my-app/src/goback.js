

function GoBack(){

const handleClick=()=>{
    window.history.back(-2);
}

return (

    <>
    <center>

<button onChange={handleClick()}>Go Back</button>

    </center>
    </>
)

}

export default GoBack;