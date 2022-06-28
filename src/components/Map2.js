import React, { useEffect } from "react";

function GoogleMap() {
    useEffect(() => {
        const ifameData = document.getElementById("iframeId")
        const lat = 9.509130;
        const lon = -13.712550;
        ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })
    return (
        <div>
            <iframe title="Google Map" id="iframeId" height="700px" width="100%"></iframe>
        </div>
    );
}
export default GoogleMap;