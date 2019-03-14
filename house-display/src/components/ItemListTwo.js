import React from 'react';


class ItemListTwo extends React.Component{
    constructor(){
        super();
        this.state = {
            properties : []
        }
    }
    componentDidMount(){
        fetch('http://demo4452328.mockable.io/properties')
            .then(response => {
                return response.json().then(json => {
                    return response.ok ? json : Promise.reject(json);
                });
            })
            .then((data) => {
                console.log('Success', data);
                this.setState({
                    properties : data.data
                })
            })
            .catch((error) => {
                console.log('Error', error);
            });
    }
    render(){
        console.log(this.state.properties)
        return(
            <div className="row content">
                {this.state.properties.map(property=>(
                    <div key={property.id} className="col-lg-3 col-md-4 mb-3 box mr-3">
                        <div className="card-deck">
                            <div className="card">
                                <div className="card-body">
                                    <address><b>Адресс: </b> {property.full_address}</address>
                                    <p className="price"><b>Цена: </b> {property.price} $</p>
                                </div>
                                <img className="card-img-top img-s image-container" src={property.images[0]} alt='property'/>
                                <div className="card-body">
                                    <p><b>Площадь: </b> {property.area} sq. ft</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default ItemListTwo;
