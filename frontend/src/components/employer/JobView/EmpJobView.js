import React from 'react';
import EmpJobCard,{EmpAppCard, BaseCard} from './EmpJobCard';

//This component is the employer' posted job view (individual)
// An employer can view all the applicants that have applied under a particular job posted.
// EmpJobCard fields: jobPostID, companyName, jobDescription, reqSkills
// EmpAppCard fields: appName, appBackground, appSkills, appContact.



const EmpJobView=(props)=> {
    return (
        <div>
            <div className = "row">
                <EmpJobCard title="Software Engineer" companyName="Employer Com Ltd" reqSkills = "Java, HTML, CSS3 and Javascript">
                Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions.
                Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code.
                Prepares and installs solutions by determining and designing system specifications, standards, and programming.
                Improves operations by conducting systems analysis; recommending changes in policies and procedures.
                Obtains and licenses software by obtaining required information from vendors; recommending purchases; testing and approving products.
                Updates job knowledge by studying state-of-the-art development tools, programming techniques, and computing equipment; participating in educational opportunities; reading professional publications; maintaining personal networks; participating in professional organizations.
                Protects operations by keeping information confidential.
                Provides information by collecting, analyzing, and summarizing development and service issues.
                Accomplishes engineering and organization mission by completing related results as needed.
                Develops software solutions by studying information needs; conferring with users; studying systems flow, data usage, and work processes; investigating problem areas; following the software development lifecycle.
            </EmpJobCard>
            </div>
            <br/>
            <div className = "row">
                <div className = "col-sm-8 mx-auto">
                    <div className = "row">
                    {/* variable render content varying by number of applicants*/}
                    <EmpAppCard appName="Lady Rara" appSkills = "Singing, dancing, decomposing" appContact="82828261">
                        Having sold 27 million albums and 146 million singles as of January 2016, 
                        Gaga is one of the world's best-selling music artists. 
                        Her achievements include several Guinness world records, 
                        nine Grammy Awards, and awards from the Songwriters Hall of Fame 
                        and the Council of Fashion Designers of America. 
                        She has been declared Billboard's Artist of the Year and Woman of the Year, 
                        and included among Forbes's power and earnings rankings. 
                        She was ranked number four on VH1's Greatest Women in Music in 2012 and
                        second on Time's 2011 readers' poll of the most influential people of the past ten years.
                        She is known for her philanthropy and social activism, 
                        including her work related to LGBT rights, and for her nonprofit organization, 
                        the Born This Way Foundation, which focuses on empowering youth and preventing bullying.
                    </EmpAppCard>

                    <EmpAppCard appName="Lady Rara" appSkills = "Singing, dancing, decomposing" appContact="82828261">
                        Having sold 27 million albums and 146 million singles as of January 2016, 
                        Gaga is one of the world's best-selling music artists. 
                        Her achievements include several Guinness world records, 
                        nine Grammy Awards, and awards from the Songwriters Hall of Fame 
                        and the Council of Fashion Designers of America. 
                        She has been declared Billboard's Artist of the Year and Woman of the Year, 
                        and included among Forbes's power and earnings rankings. 
                        She was ranked number four on VH1's Greatest Women in Music in 2012 and
                        second on Time's 2011 readers' poll of the most influential people of the past ten years.
                        She is known for her philanthropy and social activism, 
                        including her work related to LGBT rights, and for her nonprofit organization, 
                        the Born This Way Foundation, which focuses on empowering youth and preventing bullying.
                    </EmpAppCard>

                    <EmpAppCard appName="Lady Rara" appSkills = "Singing, dancing, decomposing" appContact="82828261">
                        Having sold 27 million albums and 146 million singles as of January 2016, 
                        Gaga is one of the world's best-selling music artists. 
                        Her achievements include several Guinness world records, 
                        nine Grammy Awards, and awards from the Songwriters Hall of Fame 
                        and the Council of Fashion Designers of America. 
                        She has been declared Billboard's Artist of the Year and Woman of the Year, 
                        and included among Forbes's power and earnings rankings. 
                        She was ranked number four on VH1's Greatest Women in Music in 2012 and
                        second on Time's 2011 readers' poll of the most influential people of the past ten years.
                        She is known for her philanthropy and social activism, 
                        including her work related to LGBT rights, and for her nonprofit organization, 
                        the Born This Way Foundation, which focuses on empowering youth and preventing bullying.
                    </EmpAppCard>
                    </div>
                </div>
            </div>
          
        </div>

    )
};
/*
// to fetch the job list from the given url
updateJobApplicantList = () => {
    //get job post id
    //access job post id
    const empID = localStorage.getItem('id')
    const url = apiURL + 'employer/joblist/' + empID
    const localhost =   `http://localhost:3001/employer/joblist/${empID}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        this.setState({ jobList : data })
        //console.log(this.state.jobList)
        console.log(`total jobs : ${this.state.jobList.length}`)
        this.props.updateNumOfJobs(this.state.jobList.length)
    })
    .catch(error => {
        console.log(`Error: ${error}`)
        this.setState({ error: true })
    })
}*/
export default EmpJobView;
