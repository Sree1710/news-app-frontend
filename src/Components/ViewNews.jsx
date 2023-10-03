import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'

const ViewNews = () => {
    const [newsData, setData] = useState(
        { "articles": [] }
    )

    const [isLoading, setIsLoading] = useState(true)

    const apiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=9b6ac262eea44bcbbf80ae1b064f631d"

    const getData = () => {
        axios.get(apiUrl).then(
            (Response) => {
                setData(Response.data)
                setIsLoading(false)
            }
        )
    }

    useEffect(() => getData(), [])
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h1>View News</h1>
                    </div>
                        {isLoading ? <div class="spinner-border text-secondary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div> : <div className="row g-3">
                            {newsData.articles.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex align-items-stretch">
                                        <div className="card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={value.urlToImage} className="img-fluid rounded-start" alt="..." />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{value.title}</h5>
                                                        <p className="card-text">{value.description}</p>
                                                        <p className="card-text"><small className="text-body-secondary">{value.author}</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewNews