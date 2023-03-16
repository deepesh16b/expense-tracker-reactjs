#include <iostream>
#include <algorithm>
using namespace std;

const int N = 1e5+5;

int L[N], R[N], cnt[N], diff[N];

struct Node {
    int val, size;
    Node *left, *right;

    Node(int v) {
        val = v;
        size = 1;
        left = nullptr;
        right = nullptr;
    }
};

int getSize(Node *node) {
    return node == nullptr ? 0 : node->size;
}

void updateSize(Node *node) {
    if (node != nullptr) {
        node->size = 1 + getSize(node->left) + getSize(node->right);
    }
}

Node* insert(Node* node, int val) {
    if (node == nullptr) {
        return new Node(val);
    }
    if (val < node->val) {
        node->left = insert(node->left, val);
    } else {
        node->right = insert(node->right, val);
    }
    updateSize(node);
    return node;
}

int query(Node* node, int val) {
    if (node == nullptr) {
        return 0;
    }
    if (node->val == val) {
        return getSize(node->left);
    } else if (node->val > val) {
        return query(node->left, val);
    } else {
        return getSize(node->left) + 1 + query(node->right, val);
    }
}

int main() {
    int n, a, b, q;
    cin >> n >> a >> b >> q;

    for (int i = 0; i < n; i++) {
        if (i == 0) {
            L[i] = a;
            R[i] = b;
        } else {
            L[i] = ((long long)L[i-1] * a + b) % 1000000007;
            R[i] = ((long long)R[i-1] * a + b) % 1000000007;
        }
        cnt[L[i]]++;
        cnt[R[i]+1]--;
    }

    int prev = 0;
    for (int i = 0; i < N; i++) {
        prev += cnt[i];
        diff[i] = prev;
    }

    Node* root = nullptr;
    for (int i = 1; i < N; i++) {
        if (diff[i] > 0) {
            root = insert(root, i);
        }
    }

    long long ans = 0;
    for (int i = 0; i < q; i++) {
        int x;
        cin >> x;
        ans += query(root, x);
    }

    cout << ans << endl;

    return 0;
}
