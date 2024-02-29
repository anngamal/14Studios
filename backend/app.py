from flask import Flask 

app=Flask(__name__)

#Member API Route

@app.route('/members')
def member():
    return {"member": [ "member1", "member44", "member3"]}

if __name__ == "__main__":
    app.run(debug=True)