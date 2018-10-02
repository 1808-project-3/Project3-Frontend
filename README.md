### Initial Setup
```
git clone https://github.com/1808-project-3/Project3-Frontend.git
cd Project3-Frontend
```

### Creating group branch (only one person per group)
```
git checkout dev
git checkout -b <group-branch>
git push --set-upstream origin skills
```

### Checking out group branch (everybody except person that created it)
```
git fetch origin <group-branch>
git checkout <group-branch>
```

### Creating branch for feature
```
git checkout <group-branch>
git checkout -b <feature-name>
git push --set-upstream origin <feature-name>
```

### Adding commits to feature branch
```
git add .
git commit -m "<commit-message>"
git push
```

### Merging feature branch into group branch (do this in VSCode terminal)
```
git checkout <group-branch>
git pull <feature-name>
```

### If there is a merge conflict, resolve conflicts
In VSCode your merge conflicts will appear as errors. You will be able to accept yours or the origins version of the conflicted code, or write your own resolution.

### Push to group branch
```
git push
```

When you want to merge the group branch into dev, go to Github and push pull request. Create a pull request that requests merging the group branch into dev.

### Using Axios
```
npm install axios
```
Axios removes the need to use `.json()` at the end of your response. Axios just returns the data object you would expect.
Example
import axios from 'axios'

```
// get request
componentDidMount = async () => {
		const res = await axios.get(
			'https://my.api.mockaroo.com/project3_users.json?key=31103b00'
		);
		console.log(res.data);
		this.setState({
			users: res.data
		});
	};
  
// post/put/patch
const payload = { (replaces body in fetch) };

		const res = await axios.post(
			'https://my.api.mockaroo.com/project3_users.json?key=31103b00&_method=POST',
			payload
		);
		console.log(res);
```
For delete is axios.delete('endpoint', id of what you want to delete)
