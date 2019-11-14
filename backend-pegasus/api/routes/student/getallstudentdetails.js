const {env, sha1, mysql, mypool} = require('../../util')

const getallstudentdetails = (req, res) => {
    const studentid = parseInt(req.params.studentid);

    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            if(studentid) {               
                let queryString = `select distinct student.id,student.firstname,student.lastname,student.email,student.phone,student.country,student.city,student.currentaddress,student.postalcode,student.nationality,
                studentawards.ID as 'AwardID',studentawards.awardname as 'Award', DATE_FORMAT(studentawards.awarddate, '%b %Y') as 'Date', studentawards.awarddescription as 'Description',
                studentcertificate.ID as 'CertificateID',studentcertificate.certificatename as 'Name',studentcertificate.IssuedBy,DATE_FORMAT(studentcertificate.IssuedDate, '%b %Y') as 'IssuedDate',DATE_FORMAT(studentcertificate.ValidUntil, '%b %Y') as 'ValidUntil',
                studentdocument.id as 'DocumentID', studentdocument.Title, studentdocument.Link,
                studenteducation.id as 'EducationID', studenteducation.University, studenteducation.FieldOfStudy, studenteducation.Major, studenteducation.StartDate, studenteducation.EndDate, studenteducation.Mode, studenteducation.GPA,
                studentjobpref.id as 'JobPreferenceID', studentjobpref.Industry, studentjobpref.Position, studentjobpref.JobType, studentjobpref.ExpectedSalary, studentjobpref.Location, studentjobpref.Availability,
                studentproject.id as 'ProjectID', studentproject.Title, studentproject.Status, studentproject.Description, studentproject.Link,
                studentworkexp.id as 'WorkExpID', studentworkexp.Position, studentworkexp.Company, studentworkexp.StartDate, studentworkexp.EndDate, studentworkexp.Mode, studentworkexp.Industry, studentworkexp.AnnualSalary, studentworkexp.Description
                from pegasus.student 
                left join pegasus.studentawards on studentawards.studentid = student.id
                left join pegasus.studentcertificate on studentcertificate.studentid = student.id
                left join pegasus.studentdocument on studentdocument.studentid = student.id
                left join pegasus.studenteducation on studenteducation.studentid = student.id
                left join pegasus.studentjobpref on studentjobpref.studentid = student.id
                left join pegasus.studentproject on studentproject.studentid = student.id
                left join pegasus.studentworkexp on studentworkexp.studentid = student.id 
                left join pegasus.studentskills on studentskills.studentid = student.id where student.id = "${studentid}"
                group by student.id, studentawards.awardname, studentcertificate.certificatename, studentdocument.Title, studenteducation.University, studentjobpref.Industry, studentproject.Title, studentworkexp.Position`
                connection.query(queryString, (err, rows, fields) => {
                    if(err) {
                        res.status(500).json({ message: err })
                    }
                    else {
                        res.json({
                            Result: rows
                        })
                    }
                }) 
            } else {
                res.status(400).json({
                    message: "Bad Request! Invalid POST request!"
                });
            }
    
        }
        connection.release()
    } )
}

module.exports = getallstudentdetails