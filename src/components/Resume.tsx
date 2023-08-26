import resume from "../assets/KSresume.pdf"

export default function Resume () {
    return (
        <>
            <center>    
                <embed src={resume} width="1000" height="1000" type="application/pdf"></embed>
            </center>
        </>
    );
}