import { useRecoilValue } from 'recoil';
import { blogAtom } from '../../../atoms';
import { useNavigate } from 'react-router-dom';

const Blog = () => {

    const blogs = useRecoilValue(blogAtom)
    const navigate = useNavigate();

    return (
        <div className="section bg-light py-3 py-lg-5 px-2 px-lg-4" id="services">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="marker marker-center">Our Blogs</h2>
                </div>
                <div className="text-center">
                    <p className="mx-auto mb-3" style={{ maxWidth: '800px' }}>Experience the power of AI-driven marketing and unlock your brand's potential with our innovative solutions.</p>
                </div>
                <div className="row py-3">
                    {
                        blogs.map((blog, index) => {
                            const {imageUrl, title, shortDescription, path} = blog

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
    )
}

export default Blog