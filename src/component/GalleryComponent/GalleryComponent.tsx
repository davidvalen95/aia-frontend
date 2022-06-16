import React, {FC, useEffect} from 'react';
import styles from './GalleryComponent.module.scss';
import axios from "axios";

interface GalleryComponentProps {}


export class GalleryComponent extends  React.PureComponent{


    query = "";

    constructor(public props:any) {
        super(props);
        this.state = {
            images: []
        }
    }
    componentDidMount() {

        this.getData()
    }
    public getData(){

        axios.get('http://localhost:3015').then(axiosResponse=>{
            var result = axiosResponse.data
            console.log(result);
            this.setState({
                images: result.items
            })
        })
    }


    render() {
        return (
            <div className="GalleryComponent">

                <div className="container">
                    <div className="row">

                        {
                            this.state.images.map((current)=>{
                                return(
                                <div className="col-6 col-md-4 ">

                                    <div className="card">
                                        <div className="card-body">

                                            <h4 className="text-center fw-bold">
                                                {current.title ?? "No Title"}


                                            </h4>

                                            <img className="w-100" src={current.media.m} />


                                        </div>
                                    </div>


                                </div>)
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }


}

export default GalleryComponent;
