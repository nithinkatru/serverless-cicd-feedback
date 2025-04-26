const axios = require('axios');

module.exports = async function (context, req) {
    const organization = "akhilmano1";
    const project = "ServerlessFeedbackDemo";
    const pipelineId = "3"; 
    const personalAccessToken = "4I7suDAe8VPRIELj5nzAZOFM3r1tOzXheP4v2VeiEhg2lBlKMrPZJQQJ99BDACAAAAAAAAAAAAASAZDO3lC8";

    const url = `https://dev.azure.com/${organization}/${project}/_apis/pipelines/${pipelineId}/runs?api-version=7.1-preview.1`;

    const auth = Buffer.from(`:${personalAccessToken}`).toString('base64');

    try {
        const response = await axios.post(url, {}, {
            headers: {
                'Authorization': `Basic ${auth}`
            }
        });

        context.res = {
            status: 200,
            body: "Pipeline triggered successfully!"
        };
    } catch (error) {
        context.log.error("Pipeline trigger failed", error);
        context.res = {
            status: 500,
            body: "Failed to trigger pipeline."
        };
    }
};
