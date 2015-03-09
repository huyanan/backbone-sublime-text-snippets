**${1:获取什么实体}**
----
  ${2:获取某一个实体的json数据.}

* **URL**

  /${3:users}/:id

* **Method:**

  `${4:GET}`

*  **URL Params**

   **Required:**

   `nid=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** ``

<pre>
  {
    "request":"/${3:users}/1234",
    "errorCode":${6:200},
    "errorMessage": "${7:操作成功}",
    "data":{
      nid : 12,
      ${8:name : "Michael Bloom"}
    }
  }
</pre>

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "${5:User} doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/${3:users}/1234",
      dataType: "json",
      type : "${4:GET}",
      success : function(r) {
        console.log(r);
      }
    });
  ```
