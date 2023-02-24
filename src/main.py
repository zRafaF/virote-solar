# Copyright (c) 2023 Rafael F. Meneses
#
# This software is released under the MIT License.
# https://opensource.org/licenses/MIT

import eel
from argparse import ArgumentParser

parser = ArgumentParser()
parser.add_argument(
    "-d",
    "--development",
    help="Run as headless server, useful for development. (it doesn't need to build the webview)",
    default=False,
    action="store_true",
)

run_as_development = parser.parse_args().development


@eel.expose
def my_func():
    print("AAAAAAAAAAAAAaa")


def start_eel():
    app = "chrome"

    eel.init("web/build", [".tsx", ".ts", ".jsx", ".js", ".html"])

    eel_kwargs = dict(
        host="localhost",
        port=8080,
        shutdown_delay=3,
    )
    page_name = "index.html"

    # enable hardware acceleration
    eel_cmdline_args = "--kiosk --enable-features=WebComponentsV0Enabled --enable-webgl-draft-extensions --enable-accelerated-2d-canvas --enable-gpu-rasterization --enable-threaded-compositing --enable-native-gpu-memory-buffers --enable-zero-copy --enable-gpu-compositing --enable-oop-rasterization"

    try:
        if run_as_development:
            eel.start(**eel_kwargs, cmdline_args=[eel_cmdline_args])
        else:
            eel.start(
                page_name, mode=app, **eel_kwargs, cmdline_args=[eel_cmdline_args]
            )
    except:
        raise


if __name__ == "__main__":
    # system("taskkill /im chrome.exe /f") # Podemos colocar isso para fechar o chrome antes de rodar o eel
    eel.spawn(start_eel)  # Inicializando eel em outro thread
    while True:
        eel.sleep(1)
