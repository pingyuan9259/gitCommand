1. 生成ssh-key：
    ssh-keygen -t rsa -C '<git帐号>'

2. 生成多个ssh-key( 例如 company 和 github )：
    ssh-keygen -t rsa -f <用户目录>/.ssh/id_rsa.company -C '<company git帐号>'
    ssh-keygen -t rsa -f <用户目录>/.ssh/id_rsa.github -C '<github git帐号>'
    cd <用户目录>/.ssh/
    touch config // 如果已经生成config文件则忽略
    vi config // 编辑config如下，并将.pub公钥考入git网页的setting里
        /*
            Host <company domain>
                IdentityFile ~/.ssh/id_rsa.company  
                User <company git帐号>
               
            Host github.com  
                IdentityFile ~/.ssh/id_rsa.github  
                User <github git帐号>
        */
    ssh -T git@<company 地址> // 出现欢迎语
    ssh -T git@github.com // 出现欢迎语

3. 初始化：
    git init // 当前本地文件夹git初始化
    git git remote add origin <git库地址> // 当前本地文件夹连结远程git库
    git push -u origin master // 第一次推代码到远程
    vi .gitignore // 将本地不想提交远程的文件或者目录放到文件的末尾

4. 提交操作：
    git status // 查看当前编辑状态
    git add . // 添加所有文件，不包括删除的文件，不包括媒体文件
    git add -A // 添加所有文件
    git commit -m '<备注信息>' // 提交文件并备注
    git commit -a // 提交所有文件，省去add，省去diff
    git reset HEAD <文件名> // 放弃本地add操作
    git checkout . # // 放弃本地所有更改

5. 分支操作：
    git branch <分支名> // 创建分支
    git checkout -b <分支名> // 创建分支并切换到该分支
    git checkout <分支名> // 切换分支
    git branch -d <分支名> // 删除本地分支
    git push --delete origin <分支名> // 删除远程分支
    git branch // 查看本地分支
    git branch -a // 查看本地和远程分支

6. 代码操作：
    git pull origin <分支名> // 从远程分支拉下代码
    git push origin <分支名> // 将本地已提交的代码推到远程
    git merge <分支名> // 合并本地某分支到当前分支
    git merge origin <分支名> // 合并远程某分支到当前分支

7. 操作顺序：
    // develop分支push顺序
    完成develop开发 --> git status --> git add --> git commit --> git pull origin --> git push origin
    // master分支merge顺序
    进入master --> git pull origin  --> git merge --> git push origin

8. /* 未完待续 */

