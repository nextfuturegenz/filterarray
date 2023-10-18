import { useParams,useNavigate } from "react-router-dom"
import { useRecoilValue } from 'recoil';
import { blogDetailAtom, relatedblogListAtom } from '../../../atoms';


const BlogDetail = () => {

  const { slag } = useParams()
  const navigate = useNavigate();
  const blogDetail = useRecoilValue(blogDetailAtom(slag))
  const { imageUrl, relatedBlogIds, date, author, title, shortDescription } = blogDetail
  const relatedBlogs = useRecoilValue(relatedblogListAtom(relatedBlogIds))


  return (
    <div className="section py-3 py-lg-5 px-2 px-lg-4" id="blog-detail">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="marker marker-center">{title}</h2>
        </div>
        <div className="row">
          <div className="mb-5" data-aos="fade-right" data-aos-delay="100">
            <div className="d-flex ms-md-3"><span><i className="fas fa-2x fa-quote-left"></i></span><span className="m-2">{shortDescription}</span></div>
            <div className="d-flex justify-content-end align-items-end">
              <div className="text-end me-2">
                <div className="fw-bolder">{date}</div>
                <div className="text-small">{author}</div>
              </div><img className="me-md-3 rounded" src={imageUrl} width="96" height="96"
                alt="client 1" />
            </div>
          </div>
        </div>
      </div>

      {
        relatedBlogs.length ?
          <div className="section bg-light py-3 py-lg-5 px-2 px-lg-4" id="relatedBlogs">
            <div className="container">
              <div className="text-center mb-5">
                <h2 className="marker marker-center">Explore More</h2>
              </div>
              <div className="row py-3">
                {
                  relatedBlogs.map((blog, index) => {
                    const { imageUrl, title, shortDescription, path } = blog

                    return <div key={index} className="col-md-3 text-center mb-3" data-aos="fade-up" data-aos-delay="100" onClick={() => navigate(path)}>
                      <div className="bg-white border rounded-circle d-inline-block p-2"><img className="p-2"
                        src={imageUrl} width="96" height="96" alt="SMS" /></div>
                      <div className="bg-white border rounded p-3 mt-n4 h-70">
                        <div className="h5 mt-3">{title}</div>
                        <p className="text-small">{shortDescription}</p>
                      </div>
                    </div>
                  })
                }

              </div>
            </div>
          </div>
          :
          <></>
      }
    </div>
  )
}

export default BlogDetail