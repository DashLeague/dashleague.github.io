export async function isResponseValidJson(response:Response) {
    // is response 200
    if (!response.ok){
        return false;
    }

    // is reponse of json type
    if (!response.headers.get("content-type")?.includes("application/json")){
        return false;
    }

    return true;
}