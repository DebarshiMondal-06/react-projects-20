import React, { useState, useEffect } from 'react'
import AWS from 'aws-sdk';



const Image = () => {
  const [value, setValue] = useState('');
  const [preview, setPreview] = useState('');

  console.log(value);
  useEffect(() => {
    if (value) {
      var url = URL.createObjectURL(value)
      setPreview(url);
    }
  }, [value]);


  const S3_BUCKET = 'self-project-image-bucket';
  const ID = 'AKIASCVDYTNVKBBN2FWQ'
  const SECRET = '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';

  AWS.config.update({
    accessKeyId: ID,
    secretAccessKey: SECRET
  });
  const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: 'ap-south-1',
  });




  const submit_data = () => {
    if (value.size <= 1000000 && value.type.includes('image')) {
      console.log('hello');
      const params = {
        ACL: 'public-read',
        Body: value,
        Bucket: S3_BUCKET,
        Key: value.name
      };
      myBucket.upload(params, (err, data) => {
        if (err) console.log(err, err.stack);
        else console.log(data);
      });
    }
  }


  return (
    <div className="mt-5 text-center">
      <h1>Choose Image</h1>
      <article style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="form-control" style={{ width: 500 }}>
          <input type="file"
            onChange={(e) => setValue(e.target.files[0])}
          />
        </div>
      </article>
      
         <img className="mt-5"
          src="https://self-project-image-bucket.s3.ap-south-1.amazonaws.com/1_Rc1aagS8bZ3Wf0jI8kf3yg.png" alt="" width="300" height="300" /> : null
      
      <button className="mt-5 btn" type="submit" onClick={() => submit_data()}> Upload </button>
    </div>
  )
}

export default Image
