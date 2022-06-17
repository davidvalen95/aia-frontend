import React, {FC, useEffect} from 'react';
import styles from './GalleryComponent.module.scss';
import axios from "axios";
import PaginationComponent, {PaginationInterface} from "../PaginationComponent/PaginationComponent";
interface GalleryComponentProps {}


export class GalleryComponent extends  React.PureComponent{


    query = "";


    public pagination:PaginationInterface =  {
    page:1,
    totalPage: 200,
}
    public tag = "";
    constructor(public props:any) {
        super(props);
        this.state = {
            images: [],

        }
    }
    componentDidMount() {

        this.getData()
    }
    getData(param:any={}){

        param.page = this.pagination.page
        param.tag = this.tag;
        axios.get('http://localhost:3015',{params:param}).then(axiosResponse=>{
            var result = axiosResponse.data
            console.log(result);
            this.pagination = result.pagination;
            this.setState({
                images: result.items,
            })
        })
    }


    public pageChange(page:number){

        this.pagination.page = page;
        this.getData({})
    }
  public  onSubmitSearchForm(e:any){
        e.preventDefault();

        let data = [...e.currentTarget.elements]
            .filter((ele) => ele.type !== "submit")
            .reduce((carry,current) => {

                    carry[current.getAttribute("name")] = current.type === "file" ? current.files : current.value
                return carry;
            },{});

        this.tag = data.tag;
        this.pagination.page = 1;
        this.getData()
    }

    render() {
        return (
            <div className="GalleryComponent">

                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <form onSubmit={(e)=>{this.onSubmitSearchForm(e)}}>
                                <div className="form-group">
                                    <label htmlFor="tag">Search by Tag</label>
                                    <input name="tag" type="text" className="form-control" id="tag"
                                           aria-describedby="emailHelp" placeholder="Search By Tag"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Search</button>
                            </form>
                        </div>

                        <div className="col-12">

                            <PaginationComponent pagination={this.pagination} onPageChange={(page)=>{this.pageChange(page)}} />
                        </div>
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
