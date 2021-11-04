import os
from flask import Flask, request, jsonify, Response, abort
import mux_python
from mux_python.rest import ApiException
import json

# Authentication Setup
configuration = mux_python.Configuration()
configuration.username = os.environ.get('MUX_TOKEN_ID')
configuration.password = os.environ.get('MUX_TOKEN_SECRET')

# API Client Initialization
assets_api = mux_python.AssetsApi(mux_python.ApiClient(configuration))
playback_ids_api = mux_python.PlaybackIDApi(mux_python.ApiClient(configuration))

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'


@app.route('/assets', methods=['POST'])
def create_asset():
    input_json = request.get_json(force=True)
    url = input_json.get('url')
    if url is None or not isinstance(url, str):
        abort(400, {'url': "This field is required"})
    input_settings = [mux_python.InputSettings(url=url)]
    try:
        create_asset_request = mux_python.CreateAssetRequest(input=input_settings)
        create_asset_response = assets_api.create_asset(create_asset_request)
    except ApiException:
        abort(400, {'message': "An error has occurred"})

    asset = create_asset_response.data
    new_data = {
        "id": asset.id,
        "status": asset.status,
        "created_at": asset.created_at,
        "duration": asset.duration,
        "max_stored_resolution": asset.max_stored_resolution,
        "max_stored_frame_rate": asset.max_stored_frame_rate,
        "aspect_ratio": asset.aspect_ratio
    }
    return json.dumps(new_data)


@app.route('/assets', methods=['GET'])
def list_assets():
    try:
        list_assets_response = assets_api.list_assets()
    except ApiException:
        abort(400, {'message': "An error has occurred"})
    new_data = map(lambda asset: {
        "id": asset.id,
        "status": asset.status,
        "created_at": asset.created_at,
        "duration": asset.duration,
        "playback_id": asset.playback_ids[0].id,
        "max_stored_resolution": asset.max_stored_resolution,
        "max_stored_frame_rate": asset.max_stored_frame_rate,
        "aspect_ratio": asset.aspect_ratio
    }, list_assets_response.data)
    return jsonify(list(new_data))


@app.route('/assets/<string:asset_id>', methods=['GET'])
def get_asset(asset_id):
    try:
        asset_object_response = assets_api.get_asset(asset_id)
        asset = asset_object_response.data
    except ApiException:
        return "An error has occurred"
    new_data = {
        "id": asset.id,
        "status": asset.status,
        "created_at": asset.created_at,
        "playback_id": asset.playback_ids[0].id,
        "duration": asset.duration,
        "max_stored_resolution": asset.max_stored_resolution,
        "max_stored_frame_rate": asset.max_stored_frame_rate,
        "aspect_ratio": asset.aspect_ratio
    }
    return jsonify(new_data)


if __name__ == '__main__':
    app.run()
