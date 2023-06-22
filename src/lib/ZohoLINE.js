import dayjs from 'dayjs';
import 'dayjs/locale/ja';
dayjs.locale('ja');

export default class {

    constructor(company_id, channel_id, api_key) {
        this.company_id = company_id;
        this.channel_id = channel_id;
        this.api_key = api_key;

        this.zlconnect_api_host = "5g4liysz1a.execute-api.ap-northeast-1.amazonaws.com";
        this.zlconnect_getMedia_api_host = "fdkbt1h252.execute-api.ap-northeast-1.amazonaws.com";
        this.zlconnect_api_stage = "api";
    }

    sendChat(user_id, text) {
        return new Promise((resolve, reject) => {
            let req_data = {
                "data": JSON.stringify({
                    "company_id": this.company_id,
                    "channel_id": this.channel_id,
                    "user_id": user_id,
                    "text": text,
                    "chat_type": 0,
                    "sent_at": dayjs().valueOf()
                }),
                "timeout": 0,
                "headers": {
                    "x-api-key": this.api_key,
                    "Content-Type": "application/json"
                },
                "method": "POST",
                "url": `https://${this.zlconnect_api_host}/${this.zlconnect_api_stage}/send`,
            };

            $.ajax(req_data).done(function(data) {
                resolve(data);
            }).fail(function(data) {
                reject(data);
            });
        });
    }

    sendStickerChat(user_id, stickerInfo) {
        return new Promise((resolve, reject) => {
            let req_data = {
                "data": JSON.stringify({
                    "company_id": this.company_id,
                    "channel_id": this.channel_id,
                    "user_id": user_id,
                    "chat_type": 1,
                    "text": stickerInfo,
                    "content": null,
                    "sent_at": dayjs().valueOf()
                }),
                "timeout": 0,
                "headers": {
                    "x-api-key": this.api_key,
                    "Content-Type": "application/json"
                },
                "method": "POST",
                "url": `https://${this.zlconnect_api_host}/${this.zlconnect_api_stage}/send`,
            };

            $.ajax(req_data).done(function(data) {
                resolve(data);
            }).fail(function(data){
                reject(data);
            });
        });
    }

    sendImageChat(user_id, image) {
        return new Promise((resolve, reject) => {
            let req_data = {
                "data": JSON.stringify({
                    "company_id": this.company_id,
                    "channel_id": this.channel_id,
                    "user_id": user_id,
                    "chat_type": 2,
                    "text": null,
                    "content": image,
                    "sent_at": dayjs().valueOf()
                }),
                "timeout": 0,
                "headers": {
                    "x-api-key": this.api_key,
                    "Content-Type": "application/json"
                },
                "method": "POST",
                "url": `https://${this.zlconnect_api_host}/${this.zlconnect_api_stage}/send`,
            };

            $.ajax(req_data).done(function(data) {
                resolve(data);
            }).fail(function(data){
                reject(data);
            });
        });
    }

    sendVideoChat(user_id, video) {
        return new Promise((resolve, reject) => {
            let req_data = {
                "data": JSON.stringify({
                    "company_id": this.company_id,
                    "channel_id": this.channel_id,
                    "user_id": user_id,
                    "chat_type": 3,
                    "text": null,
                    "content": video,
                    "sent_at": dayjs().valueOf()
                }),
                "timeout": 0,
                "headers": {
                    "x-api-key": this.api_key,
                    "Content-Type": "application/json"
                },
                "method": "POST",
                "url": `https://${this.zlconnect_api_host}/${this.zlconnect_api_stage}/send`,
            };

            $.ajax(req_data).done(function(data) {
                resolve(data);
            }).fail(function(data){
                reject(data);
            });
        });
    }

    sendAudioChat(user_id, audio) {
        return new Promise((resolve, reject) => {
            let req_data = {
                "data": JSON.stringify({
                    "company_id": this.company_id,
                    "channel_id": this.channel_id,
                    "user_id": user_id,
                    "chat_type": 4,
                    "text": null,
                    "content": audio,
                    "sent_at": dayjs().valueOf()
                }),
                "timeout": 0,
                "headers": {
                    "x-api-key": this.api_key,
                    "Content-Type": "application/json"
                },
                "method": "POST",
                "url": `https://${this.zlconnect_api_host}/${this.zlconnect_api_stage}/send`,
            };

            $.ajax(req_data).done(function(data) {
                resolve(data);
            }).fail(function(data){
                reject(data);
            });
        });
    }

    sendPdfChat(user_id, application) {
        return new Promise((resolve, reject) => {
            let req_data = {
                "data": JSON.stringify({
                    "company_id": this.company_id,
                    "channel_id": this.channel_id,
                    "user_id": user_id,
                    "chat_type": 5,
                    "text": null,
                    "content": application,
                    "sent_at": dayjs().valueOf()
                }),
                "timeout": 0,
                "headers": {
                    "x-api-key": this.api_key,
                    "Content-Type": "application/json"
                },
                "method": "POST",
                "url": `https://${this.zlconnect_api_host}/${this.zlconnect_api_stage}/send`,
            };

            $.ajax(req_data).done(function(data) {
                resolve(data);
            }).fail(function(data){
                reject(data);
            });
        });
    }

    getChat(user_id, limit=100) {
        return new Promise((resolve, reject) => {
            const conn_name = "zoho_line_connection";
            let req_data = {
                "data": JSON.stringify({
                    "company_id": this.company_id,
                    "channel_id": this.channel_id,
                    "user_id": user_id,
                    "new_chat": 0,
                    "limit": limit
                }),
                "timeout": 0,
                "headers": {
                    "x-api-key": this.api_key,
                    "Content-Type": "application/json"
                },
                "method": "POST",
                "url": `https://${this.zlconnect_api_host}/${this.zlconnect_api_stage}/getchat`,
            };

            $.ajax(req_data).done(function(data) {
                resolve(data);
            }).fail(function(data){
                console.log(data);
                reject(data);
            });
        });
    }

    getNewChat(user_id, last_read_time, limit=100) {
        return new Promise((resolve, reject) => {
            let req_data = {
                "data": JSON.stringify({
                    "company_id": this.company_id,
                    "channel_id": this.channel_id,
                    "user_id": user_id,
                    "new_chat": 1,
                    "limit": limit,
                    "timestamp": last_read_time
                }),
                "timeout": 0,
                "headers": {
                    "x-api-key": this.api_key,
                    "Content-Type": "application/json"
                },
                "method": "POST",
                "url": `https://${this.zlconnect_api_host}/${this.zlconnect_api_stage}/getchat`,
            };
            $.ajax(req_data).done(function(data) {
                resolve(data);
            }).fail(function(data){
                console.log(data);
                reject();
            });
        });
    }

    getOldChat(user_id, oldest_chat_time, limit=100) {
        return new Promise((resolve, reject) => {
            let req_data = {
                "data": JSON.stringify({
                    "company_id": this.company_id,
                    "channel_id": this.channel_id,
                    "user_id": user_id,
                    "new_chat": 0,
                    "limit": limit,
                    "timestamp": oldest_chat_time
                }),
                "timeout": 0,
                "headers": {
                    "x-api-key": this.api_key,
                    "Content-Type": "application/json"
                },
                "method": "POST",
                "url": `https://${this.zlconnect_api_host}/${this.zlconnect_api_stage}/getchat`,
            };

            $.ajax(req_data).done(function(data) {
                resolve(data);
            }).fail(function(data){
                console.log(data);
                reject();
            });
        });
    }

    getUserStatus(user_id){
        return new Promise((resolve, reject) => {
            let req_data = {
                "data": JSON.stringify({
                    "channel_id": this.channel_id,
                    "user_id": user_id,
                }),
                "timeout": 0,
                "headers": {
                    "x-api-key": this.api_key,
                    "Content-Type": "application/json"
                },
                "method": "POST",
                "url": `https://${this.zlconnect_api_host}/${this.zlconnect_api_stage}/user-status`,
            };

            jQuery.ajax(req_data).done(function(data) {
                if(Object.prototype.hasOwnProperty.call(data, 'isLink')){
                    resolve(data.isLink);
                }else{
                    reject(data);
                }
            }).fail(function(data){
                console.log(data);
                reject(data);
            });
        });
    }

    // getMedia(param) {
    //     let url = `https://${this.zlconnect_getMedia_api_host}/${this.zlconnect_api_stage}/getmedia`;
    //     return url + "?param=" + param;
    // }
    getMedia(id) {
        // let url = `https://${this.zlconnect_getMedia_api_host}/${this.zlconnect_api_stage}/getmedia/${id}`;
        let url = `https://zlconnect.net/getmedia/${id}`;
        return url;
    }

    getMediaURL(param) {
        // let url = `https://${this.zlconnect_getMedia_api_host}/${this.zlconnect_api_stage}/getmedia/url`;
        let url = `https://zlconnect.net/getmedia/url`;
        return url + "?param=" + param;
    }

    getBlockFlg(line_id) {
        return new Promise((resolve, reject) => {
            let req_data = {
                "data": JSON.stringify({
                    "type": "get",
                    "channel_id": this.channel_id,
                    "line_id": line_id,
                }),
                "timeout": 0,
                "headers": {
                    "x-api-key": this.api_key,
                    "Content-Type": "application/json"
                },
                "method": "POST",
                "url": `https://${this.zlconnect_api_host}/${this.zlconnect_api_stage}/block`,
            };
            $.ajax(req_data).done(function(data) {
                resolve(data);
            }).fail(function(data){
                console.log(data);
                reject();
            });
        });
    }

    // ブロック処理
    setBlockFlg(line_id, block_status) {
        return new Promise((resolve, reject) => {
            let req_data = {
                "data": JSON.stringify({
                    "type": "set",
                    "channel_id": this.channel_id,
                    "line_id": line_id,
                    "block_status": block_status,
                }),
                "timeout": 0,
                "headers": {
                    "x-api-key": this.api_key,
                    "Content-Type": "application/json"
                },
                "method": "POST",
                "url": `https://${this.zlconnect_api_host}/${this.zlconnect_api_stage}/block`,
            };
            $.ajax(req_data).done(function(data) {
                resolve(data);
            }).fail(function(data){
                console.log(data);
                reject();
            });
        });
    }

    // 署名付きURLの発行
    getPresignedUrl(user_id, fileExtension) {
        return new Promise((resolve, reject) => {
            let req_data = {
                "data": JSON.stringify({
                    "company_id": this.company_id,
                    "channel_id": this.channel_id,
                    "user_id": user_id,
                    "fileExtension": fileExtension
                }),
                "timeout": 0,
                "headers": {
                    "Content-Type": "application/json"
                },
                "method": "POST",
                "url": `https://${this.zlconnect_api_host}/${this.zlconnect_api_stage}/getpresignedurl`,
            };

            $.ajax(req_data).done(function(data) {
                resolve(data);
            }).fail(function(data){
                reject(data);
            });
        });
    }

    uploadFile(presignedUrl, file, contentType) {
        return new Promise((resolve, reject) => {
            let req_data = {
                "data": file,
                "headers": {
                    "Content-Type": contentType
                },
                "method": "PUT",
                "url": presignedUrl,
                "processData": false,
                "contentType": false
            };
            $.ajax(req_data).done(function(data) {
                resolve(data);
            }).fail(function(data){
                console.log("ERROR!!!!!")
                console.log(data);
                reject();
            });
        });
    }
}
