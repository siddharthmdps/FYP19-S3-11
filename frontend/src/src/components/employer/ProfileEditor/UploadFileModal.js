// import 'react-dropzone-uploader/dist/styles.css'
// import Dropzone from 'react-dropzone-uploader'

// class UploadFile extends Component {
//     constructor(props) {
//         super()
//         this.props = props
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);


//     }

//     getUploadParams = ({ meta }) => {
//         const url = `/uploadstudentpicture/${this.state.StudentID}`
//         return { url, meta: { fileUrl: `${url}/${encodeURIComponent(meta.name)}` } }
//     }

//     handleChangeStatus = ({ meta }, status) => {
//         console.log(status, meta)
//     }

//     handleSubmit = (files, allFiles) => {
//         console.log(files.map(f => f.meta))
//         allFiles.forEach(f => f.remove())
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <div id="toast">Upload</div>
//                 <Dropzone
//                     getUploadParams={this.getUploadParams}
//                     onChangeStatus={this.handleChangeStatus}
//                     onSubmit={this.handleSubmit}
//                     accept="image/*"
//                     maxFiles={1}
//                     multiple={false}
//                     canCancel={false}
//                     inputContent="Drop A File (image only)"
//                     styles={{
//                         dropzone: { width: 400, height: 200 },
//                         dropzoneActive: { borderColor: 'green' },
//                         dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' }
//                     }}
//                 />
//             </React.Fragment>
//         )
//     }

// }


