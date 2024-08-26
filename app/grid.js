const Grid = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 box">
                    <img className="car_img" src="car2.webp" alt="Toyota Urban Cruiser Taisor" />
                    <div className="infomationDiv">
                        <p className="title">Toyota Urban Cruiser Taisor</p>
                        <p className="price">Rs. 7.74 Lakh onwards</p>
                        <p className="price">Ex-Showroom price</p>
                    </div>
                </div>
                <div className="col-md-4 box">
                    <img className="car_img" src="/car1.jpg" alt="Mahindra XUV 3XO" />
                    <div className="infomationDiv">
                        <p className="title">Mahindra XUV 3XO</p>
                        <p className="price">Rs. 7.49 Lakh onwards</p>
                        <p className="price">Ex-Showroom price</p>
                    </div>
                </div>
                <div className="col-md-4 box">
                    <img className="car_img" src="car4.webp" alt="Maruti Fronx" />
                    <div className="infomationDiv">
                        <p className="title">Maruti Fronx</p>
                        <p className="price">Rs. 7.74 Lakh onwards<br />Ex-Showroom price</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 box">
                    <img className="car_img" src="car5.webp" alt="Renault Kige" />
                    <div className="infomationDiv">
                        <p className="title">Renault Kige</p>
                        <p className="price">Rs. 6.00 Lakh onwards<br />Ex-Showroom price</p>
                    </div>
                </div>
                <div className="col-md-4 box">
                    <img className="car_img" src="/car8.webp" alt="Tata Nexon" />
                    <div className="infomationDiv">
                        <p className="title">Tata Nexon</p>
                        <p className="price">Rs. 11.80 Lakh onwards<br />Ex-Showroom price</p>
                    </div>
                </div>
                <div className="col-md-4 box">
                    <img className="car_img" src="/car7.webp" alt="Citroen C3" />
                    <div className="infomationDiv">
                        <p className="title">Citroen C3</p>
                        <p className="price">Rs. 6.00 Lakh onwards<br />Ex-Showroom price</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 box">
                    <img className="car_img" src="/car10.webp" alt="Tata" />
                    <div className="infomationDiv">
                        <p className="title">Tata</p>
                        <p className="price">Rs. 6.00 Lakh onwards<br />Ex-Showroom price</p>
                    </div>
                </div>
                <div className="col-md-4 box">
                    <img className="car_img" src="/ar6.webp" alt="Volkswagen Taigun" />
                    <div className="infomationDiv">
                        <p className="title">Volkswagen Taigun</p>
                        <p className="price">Rs. 6.00 Lakh onwards<br />Ex-Showroom price</p>
                    </div>
                </div>
                <div className="col-md-4 box">
                    <img className="car_img" src="/car9.webp" alt="Mahindra XUV700" />
                    <div className="infomationDiv">
                        <p className="title">Mahindra XUV700</p>
                        <p className="price">Rs. 6.00 Lakh onwards<br />Ex-Showroom price</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Grid;


